var person = {
  firstName: 'Alex',
  lastName: 'Penman',
  glasses: true,
  hairColor: 'black'
};


var classGroup = [
  {
    firstName: 'Alex',
    glasses: true,
    hairColor: 'black'
  },
  {
    firstName: 'Christian',
    glasses: false,
    hairColor: 'black'
  },
  {
    firstName: 'Charlie',
    glasses: false,
    hairColor: 'auburn'
  },
  {
    firstName: 'Joshua',
    glasses: false,
    hairColor: 'black'
  }
];



var describeGroup = function (group){

  for ( var i =0; i<group.length; i++){
    if(group[i].glasses === true){
      var hasGlasses = 'does';
    } else {
      var hasGlasses = 'does not';
      }

    console.log(group[i].firstName + ' has ' + group[i].hairColor + ' hair and ' + hasGlasses + ' wear glasses.');
  }
}


describeGroup(classGroup);
