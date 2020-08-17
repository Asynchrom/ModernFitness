let Authenticated = false

let Credentials = {
    token: '',
    user: {
        username: '',
        gender: '',
        password: '',
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        zip: ''
    }
}

let User = {
    username: 'KingKeanu',
    gender: 'Male',
    password: '12345',
    firstName: 'Keanu',
    lastName: 'Reeves',
    city: 'Pula',
    state: 'Croatia',
    zip: '52100'
}

let MuscleGroups = ['Chest','Arms','Back','Shoulders','Legs','Abs']

let Exercises = [
    {
        id: 1,
        custom: false,
        img: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/2018/09/dumbbell-bench-press.jpg',
        name: 'Dumbbell Bench Press',
        muscleGroup: 'Chest',
        description: 'Lie back on a bench holding a dumbbell in each hand just to the sides of your shoulders. Your palms should be facing towards your feet in the starting position, although if you have shoulder issues then switch to a neutral grip, where the palms face each other.Press the weights above your chest by extending your elbows until your arms are straight, then bring the weights back down slowly. To take advantage of the range of movement offered by using dumbbells rather than a barbell, take the weights down past your shoulders and bring them closer together at the top of the movement. Don’t touch them at the top, though, because that will take some of the strain off your muscles.'
    },
    {
        id: 2,
        custom: false,
        img: 'https://fullscalefit.com/new/wp-content/uploads/2019/10/6.1-Incline-Dumbbell-Chest-Press-Start-1024x683.jpg',
        name: 'Incline dumbbell bench press',
        muscleGroup: 'Chest',
        description: 'Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the edge of an incline bench. To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top. Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest). Contract the chest and push the dumbbells back up to the starting position. Repeat for the desired number of repetitions.'
    }
]

let Workouts = [
    {
        id: 1,
        date: '2015-03-25',
        duration: 24,
        muscles: 'Chest',
        exercises: [
            {
                id: 1,
                name: 'Dumbbell Bench Press',
                muscleGroup: 'Chest',
                sets: 3,
                reps: 4
            },
            {
                id: 2,
                name: 'Incline dumbbell bench press',
                muscleGroup: 'Chest',
                sets: 2,
                reps: 1
            }
        ]
    },
    {
        id: 2,
        date: '2016-04-22',
        duration: 21,
        muscles: 'Chest',
        exercises: [
            {
                id: 2,
                name: 'Incline dumbbell bench press',
                muscleGroup: 'Chest',
                sets: 4,
                reps: 5
            }
        ]
    },
]

export { Authenticated, Credentials, MuscleGroups, Exercises, Workouts, User }
