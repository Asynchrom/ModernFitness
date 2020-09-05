<template>
    <div class="text-gray-900 bg-gray-200" style="min-height:100vh">

        <Loading v-if="loading" />

        <router-link to="/menu/" class="absolute z-10 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full float-right" style="text-align: center;width:60px;height:60px; margin-top:40px; margin-left: 40px">
            <i class="fas fa-backward" style="margin-top: 22px;"></i>
        </router-link>

        <div class="block pt-8">

            <div x-data="{ open : false }">
                <div class="container mx-auto">
                    <div class="flex flex-col mx-4 px-8 py-6 bg-white rounded-b-md shadow"
                        x-show="open"
                        x-transition:enter="transition ease-out origin-top duration-300"
                        x-transition:enter-start="opacity-0 transform scale-90"
                        x-transition:enter-end="opacity-100 transform scale-100"
                        x-transition:leave="transition ease-in origin-top duration-300"
                        x-transition:leave-start="opacity-100 transform scale-100"
                        x-transition:leave-end="opacity-0 transform scale-90"
                        >
                        <div class="mb-2 pb-2">
                            <h3 class="font-semibold text-lg text-gray-600">Most popular exercises in last 30 days</h3>
							<p class="text-sm text-gray-500">Most worked out exercises by each muscle group</p>
                        </div>
						<div class="flex justify-center text-sm text-gray-700">
							<div v-for="group in workoutStats" v-bind:key="group.name" class="w-1/6 mr-10">
								<h3 class="pb-2 border-b mb-3 text-md text-gray-900 font-semibold">{{group.name}}</h3>
								<div class="flex flex-col">
									<div v-for="(rank, index) in group.ranks" v-bind:key="rank.name" class="flex py-2">
										<p class="flex-1">{{index+1}}. {{rank.name}} ({{rank.reps}})</p>
									</div>
								</div>
							</div>
							
						</div>
                    </div>
                </div>
            </div>
            <div class="container px-4 py-4 mx-auto">
				<h3 class="block text-xl text-gray-700 font-semibold mb-3"></h3>
				<div class="flex">
					<div class="w-1/2">
						<div class="rounded-md p-6 bg-white shadow">
							<div class="mb-2 pb-2">
								<h3 class="font-semibold text-lg text-gray-600">Favourite muscle groups</h3>
								<p class="text-sm text-gray-500">Top muscle groups by the number of total repetitions</p>
							</div>
							<div id="chartdiv" class="w-full" style="height: 240px"></div>
						</div>
					</div>
					<div class="w-1/2 ml-4">
						<div class="rounded-md p-6 bg-white shadow">
							<div class="mb-2 pb-2">
								<h3 class="font-semibold text-lg text-gray-600">Exercise recommendations</h3>
								<p class="text-sm text-gray-500">Some exercises that you should try next time</p>
								<p class="text-sm text-gray-500"></p>
							</div>
							<div class="w-full flex flex-row flex-wrap" style="height: 240px">
								<div v-for="x in recom" v-bind:key="x.name" class="w-1/2 p-2" >
								<router-link to="/exercises">
									<div class="relative bg-white rounded border" style="height: 240px">
										<div class="block bg-gray-200 border-b" style="height: 150px">
											<img class="block w-full" v-bind:src="x.img" style="height: 150px; object-fit: cover">
										</div>
										<div class="p-4">
										<h3 class="text-lg font-bold">
											<p class="stretched-link">
												{{x.name}}
											</p>
										</h3>
										<p class="block mb-2 text-sm text-gray-600">{{x.muscle}}</p>
										</div>
									</div>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../components/Loading'
import service from '../sevices'

export default {
    components: { Loading },

    data() {
        return {
			loading: false,
			workoutStats: [
				{name: 'Chest'},
				{name: 'Arms'},
				{name: 'Back'},
				{name: 'Shoulders'},
				{name: 'Legs'},
				{name: 'Abs'},
			],
			recom: []
        }
    },

    async mounted() {
		this.loading = true
		let workouts = JSON.parse(JSON.stringify(await service.getWorkouts()))

		let exercises = JSON.parse(JSON.stringify(await service.getExercises()))

		this.workoutStats.forEach((el, index, theArray) => {
			theArray[index].ranks = []
			theArray[index].totalReps = 0
		});
		let today = new Date();
		let day = today.getDay()
		let month = today.getMonth()
		let year = today.getFullYear()
		let date = year+'-'+("0" + month).slice(-2)+'-'+("0" + day).slice(-2)

		for (let i = 0; i < workouts.length; i++) {
			if (date > workouts[i].date) break
			workouts[i].exercises.forEach ( el => 	{
				for (let j = 0; j < this.workoutStats.length; j++) {
					if (el.muscle == this.workoutStats[j].name ) {
						this.workoutStats[j].totalReps += Number(el.sets) * Number(el.reps)
						let index = this.workoutStats[j].ranks.findIndex(x => x.name == el.name);
						if (index == '-1') {
							el.reps = Number(el.sets) * Number(el.reps)
							el.sets = Number(el.sets)
							this.workoutStats[j].ranks.push(el)
						}
						else {
							this.workoutStats[j].ranks[index].sets += Number(el.sets)
							this.workoutStats[j].ranks[index].reps += Number(el.sets) * Number(el.reps)
						}
						break
					}
				}
			})
		}

		for (let i = 0; i < this.workoutStats.length; i++) {
			this.workoutStats[i].ranks.sort((a, b) => (a.reps > b.reps) ? -1 : 1)
		}

		let statArray = Object.assign([], this.workoutStats)

		statArray.sort((a, b) => (a.totalReps > b.totalReps) ? -1 : 1)

		await this.$forceUpdate()

		let counter = 0
		this.recom = []

		for( let i = 0; i < exercises.length; i++ ) {
			let found = false
			for ( let j = statArray.length - 1; j >= 0; j--) {
				console.log(1, exercises[i].name)
				let index = statArray[j].ranks.findIndex(el => el.name == exercises[i].name)
				if(index != '-1') {
					found = true
				}
			}
			if(!found) {
				counter++
				this.recom.push(exercises[i])
				if(counter == 2) {
					break
				}
			}
		}

		if(counter < 2) {
			let arr = statArray[statArray.length - 1].ranks
			this.recom.push(arr[arr.length - 1])
		}

		if(counter == 0) {
			let arr = statArray[statArray.length - 2].ranks
			this.recom.push(arr[arr.length - 1])
		}

        function bar_chart(selector, data) {
				am4core.useTheme(am4themes_animated);

				var chart = am4core.create(selector, am4charts.XYChart);

				chart.data = data;

				var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
				categoryAxis.dataFields.category = "muscle";
				categoryAxis.renderer.grid.template.location = 0;
				categoryAxis.renderer.minGridDistance = 30;

				categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
				// 	if (target.dataItem && target.dataItem.index & 2 == 2) {
				// 		return dy + 25;
				// 	}
					return dy;
				});

				var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
				valueAxis.min = 0;

				var series = chart.series.push(new am4charts.ColumnSeries());
				series.dataFields.valueY = "reps";
				series.dataFields.categoryX = "muscle";
				series.name = "reps";
				series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
				series.columns.template.fillOpacity = .8;

				var columnTemplate = series.columns.template;
				columnTemplate.strokeWidth = 2;
				columnTemplate.strokeOpacity = 1;
			}


			am4core.ready(function () {
				bar_chart("chartdiv", [{
					"muscle": statArray[0].name,
					"reps": statArray[0].totalReps
				}, {
					"muscle": statArray[1].name,
					"reps": statArray[1].totalReps
				}, {
					"muscle": statArray[2].name,
					"reps": statArray[2].totalReps
				}]);
			});

			this.loading = false
    }
}
</script>
