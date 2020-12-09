class Duck{
  constructor(voice){
    this.voice = voice
  }
  quack(){
    console.log(this.voice)
    return this.voice
  }
}

class AngryDuck extends Duck{
  angryQuack(){
    // take Duck quack method value and make it uppercase
    const upperCaseQuack = super.quack().toUpperCase();
    console.log(upperCaseQuack)
  }
}

// Create new instance of AngryDuck class
const myAngryDuck = new AngryDuck('quack quack !!!')

myAngryDuck.angryQuack()