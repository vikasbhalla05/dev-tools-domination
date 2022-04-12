const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("hello");

    // Interpolated
    let name = 'vikas';
    console.log(`hello this is ${name}`);

    // Styled
    console.log("%c this is styled text", "background-color: blue;")

    // warning!
    console.warn("Ohh no!!");

    // Error :|
    console.error("shit!");

    // Info
    console.info("Crocodiles eat 3-4 people per year");

    // Testing
    console.assert(1===2, "This is wrong");

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together

    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count()
    // timing
    console.time('fetching data');
    console.timeEnd('fetching data');

    // creating a table from an array
    console.table()
