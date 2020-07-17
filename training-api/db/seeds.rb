# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Target.create([
    {name: 'Cardio'},
    {name: 'Back'},
    {name: 'HIT'},
    {name: 'Jiu Jitsu'},
    {name: 'Boxing'},
    {name: 'Chest'},
    {name: 'Legs'},
    {name: 'Shoulders'},
    {name: 'Arms'},
    {name: 'Core'}
])

Workout.create([
    {name: 'Running', details: '1 Hour', target_id: 1},
    {name: 'Swimming', details: '1 Hour', target_id: 1},
    {name: 'Bike', details: '1 Hour', target_id: 1},
    {name: 'Barbell Rows', details: '3 x 10', target_id: 2},
    {name: 'Pull Ups', details: '3 x 10', target_id: 2},
    {name: 'Sprints', details: '5x', target_id: 3},
    {name: 'Warm Up', details: '10 min plus stretching', target_id: 4},
    {name: 'Guard Pass Drill', details: '3 min', target_id: 4},
    {name: 'Sparring', details: '5 min rounds', target_id: 4},
    {name: 'Movement Warm Up', details: '2 x 3 min', target_id: 5},
    {name: 'Jab', details: 'Heavybag 3 min', target_id: 5},
    {name: 'Hooks', details: 'Heaybag 3 min', target_id: 5},
    {name: 'Combinations', details: 'Heavybag 3 min', target_id: 5},
    {name: 'Bench Press', details: '3 x 10', target_id: 6},
    {name: 'Flys', details: '3 x 10', target_id: 6},
    {name: 'Squats', details: '3 x 10', target_id: 7},
    {name: 'Deadlifts', details: '3 x 10', target_id: 7},
    {name: 'Shoulder Press', details: '3 x 10', target_id: 8},
    {name: 'Curls', details: '3 x 10', target_id: 9},
    {name: 'Skull Crushers', details: '3 x 10', target_id: 9},
    {name: 'Leg Lifts', details: '3 x 10', target_id: 10}
])