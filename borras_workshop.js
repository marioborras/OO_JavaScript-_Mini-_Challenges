//Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is 
//times the number supplied.getCurrentValue should return the last answer returned from multiply.



function Multiplier() {  //an object is basically a function so we can start by calling the Multipliyer
    this.currentValue = 1;    //a function, inside the function are two more functions, these are our methods.
    this.multiply = function(number){ //first method
        this.currentValue = number * this.currentValue;
        return this.currentValue
    }
    this.getCurrentValue = function (number) {//second method
        return this.currentValue;
        
    }
} 

var trial = new Multiplier();

// type this into console to multiply." trial.multiply(2) "
//type this  into console to get the currentValue "trial.getCurrentValue()"

//2

/*Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works. */
//first constructor
function Album(){ 

    //empty array
    this.photos =[]; 
    //method #1 to add photo
    this.addphoto = function(pic) { 
        //pushes it to the array up above
        this.photos.push(pic) 
    }

    //method #2 to list photo
    this.listphoto = function(){
        for(let pic of this.photos) 
        pic.info();

    }
}
//second constructor
function Photo (file, location) { 
    this.file =file; 
    this.location=location;
//indvidual photo function
    this.info = function(){
        console.log(this.file + this.location)
    }
}



var year2018album = new Album();
year2018album.addphoto(new Photo("pic1.jpg", "Miami"));

year2018album.listphoto();


//3 Create a prototypical Person object. From this object, extend a 
//Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances
// of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in 
//each object.


//constructor function, or class
function Person(name, lname) {
    this.name = name;
    this.lname = lname;
    
  }
//////////////////
  //creating a subclass to user
  function Teacher(name, lname, salary) {
    this.salary = salary;

    
     //extending the Person class
    Person.call(this, name, lname)
  }
  


  function Student(name, lname, grade) {
      this.grade= grade;

      Person.call(this, name, lname)
  }

  function School(){ //construct school for students & teachers
    this.student = []
    this.teacher = []
    this.addStudent = function(pupil){
        this.student.push(pupil)
    }
    this.addTeacher = function(faculty){
        this.teacher.push(faculty) 
    }
}

var PhiladelphiaSchool = new School() //make a new school
PhiladelphiaSchool.addStudent(new Student("john","smith", 10)) //add a student to the school
PhiladelphiaSchool.addTeacher(new Teacher("Jayne", "Borras", "$50K")) //add a teacher to the school
//console.log(PhiladelphiaSchool.teacher) gives you teacher in the school.
//console.log(PhiladelphiaSchool.student) gives you the students in the school.

  

  
  
 