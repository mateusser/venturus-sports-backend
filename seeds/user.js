
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          city: "Gwenborough",
          ridegroup: 1,
          sun: true,
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true,
          sat: true
        },
        {
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          city: "Wisokyburgh",
          ridegroup: 2,
          sun: false,
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false
        },
        {
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          city: "McKenziehaven",
          ridegroup: 3,
          sun: true,
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: true
        },
        {
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          city: "South Elvis",
          ridegroup: 1,
          sun: false,
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true,
          sat: false
        },
        {
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          city: "Roscoeview",
          ridegroup: 2,
          sun: false,
          mon: true,
          tue: false,
          wed: true,
          thu: false,
          fri: true,
          sat: false
        },
        {
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          city: "South Christy",
          ridegroup: 3,
          sun: true,
          mon: false,
          tue: true,
          wed: false,
          thu: true,
          fri: false,
          sat: true
        },
        {
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          city: "Howemouth",
          ridegroup: 1,
          sun: false,
          mon: true,
          tue: false,
          wed: false,
          thu: false,
          fri: true,
          sat: false
        },
        {
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          city: "Aliyaview",
          ridegroup: 2,
          sun: false,
          mon: false,
          tue: true,
          wed: false,
          thu: true,
          fri: false,
          sat: false
        },
        {
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          city: "Bartholomebury",
          ridegroup: 3,
          sun: false,
          mon: false,
          tue: false,
          wed: true,
          thu: false,
          fri: true,
          sat: false
        },
        {
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          city: "Lebsackbury",
          ridegroup: 1,
          sun: false,
          mon: true,
          tue: false,
          wed: true,
          thu: false,
          fri: false,
          sat: false
        }
      ]);
    });
};
