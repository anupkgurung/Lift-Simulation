const addFloor = document.querySelector('#add-floor')
const addLift = document.querySelector('#add-lift')
// const moveUp = document.querySelector('.left-door');
// const moveDown = document.querySelector('.right-door');
let floorId=0;



addFloor.addEventListener('click',function(){
    addFloors()
})

addLift.addEventListener('click',function(){
    addLifts()
})

function moveUp(){
    const leftDoor = document.querySelector('.left-door')
    const rightDoor = document.querySelector('.right-door')
    
    leftDoor.classList.add('open-left-door');
    rightDoor.classList.add('open-right-door');

    setTimeout(() => {
        leftDoor.classList.remove('open-left-door');
        rightDoor.classList.remove('open-right-door');
    }, 2000);
}

// moveDown.addEventListener('click',function(){

// })

function getFloorId(){
    return floorId++;
}
function createFloor(){
    const floor = document.createElement('div');
    let fId = getFloorId();
    floor.setAttribute('id',fId);
    floor.classList.add('floor', 'flex', 'mt-1');
    return floor
}

function createLiftBtn(){
    const liftBtns = document.createElement('div');
    liftBtns.setAttribute('id','lift-btn');
    liftBtns.classList.add('flex','flex-col','justify-center');

    const btnUp = document.createElement('button');
    btnUp.classList.add('m-0-1')
    btnUp.innerText = 'up';
    
    btnUp.addEventListener('click',moveUp)
    
    const btnDown = document.createElement('button');
    btnDown.classList.add('m-0-1')
    btnDown.innerText = 'down';

    liftBtns.appendChild(btnUp)
    liftBtns.appendChild(btnDown)

    return liftBtns
}

function createLiftContainer(){
    const liftContainer = document.createElement('div');
    liftContainer.setAttribute('id','lift-container');
    liftContainer.classList.add('mb-0-5')

    return liftContainer
}

function createLift(){

    const lift = document.createElement('div')
    lift.classList.add('lift', 'py-3', 'px-2', 'ml-1', 'relative');

    const leftDoor = document.createElement('div');
    leftDoor.classList.add('left-door');

    const rightDoor = document.createElement('div');
    rightDoor.classList.add('right-door');

    lift.appendChild(leftDoor)
    lift.appendChild(rightDoor)
    return lift
}

function addFloors(){
    const floorSection = document.querySelector('#floor-with-lift');
    
    const floor = createFloor()
    const liftBtns = createLiftBtn()

    floor.appendChild(liftBtns)
    
    const baseFloor = document.querySelector("[id='0']")
    if(baseFloor){
        floorSection.insertBefore(floor,baseFloor)
    }else{
        floorSection.appendChild(floor)
    }
}

function addLifts(){
    const floor = document.querySelector("[id='0']")
    const liftContainer = createLiftContainer()
    const lift = createLift()
    liftContainer.appendChild(lift)
    floor.appendChild(liftContainer)
}