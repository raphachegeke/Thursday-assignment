//declared variables
    let name = "Rapha";
    let age = 20;
    let color = "black";
    console.log("My name is " + name + " and i am " + age + "yrs old. My favorite color is "+ color +"." );

	//Reassign Values and Print
    name = "Leon";
    age = "21";
    color = "Blue";
    console.log("My name is " + name + " and i am " + age + "yrs old. My favorite color is "+ color +"." );

    //Object Example 1
   let account = {
     github: "raphachegeke",
     x: "Rapha Chege",
     linkedin: "Rapha Kamunu",
   };
  console.log("Object1:", account.github);


//object example 2
  let user = {
    director: "Leon Kamau",
    manager: "Gladys Wambui",
    secretary: "Daniel Chege",
    member: "Grace Wanjiru",
  }
  console.log("Object2:", user.director);


//Object Example 3
  const credentials = {
    name: "Rapha Chege Kamunu",
    id: "41831655",
    phone: "+254788383053",
  }
  console.log("Object3:", credentials.name);

  
//Array Examples
  let students = ["Rapha","Daniel","Gladys"];
  console.log("Array1:", students[0]);
  let phone = [748397839, 254788383053, 254114745402];
  console.log("Array2:",phone[1]);
  let course = ["Development","Design","Marketing"];
  console.log("Array3:", course[2]);


  //Arithmetic Operators
  let a = 40;
  let b = 10;
  console.log("Add 40+10:", a+b);
  console.log("Subtract 40-10", a-b);
  console.log("Multiply 40*10", a*b);
  console.log("Divide 40/10", a/b);

  	//function "introduce"
  function introduce (name, age){
    console.log("My name is", name, ". I am", age+"yrs old");
  }
  introduce("Rapha", 21)
