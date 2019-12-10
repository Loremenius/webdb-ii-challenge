
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN:"1GNEK13T95J252740",
          make:"Ford",
          model:"F-250",
          mileage:497,
          transmission:"Automatic",
          status:"Clean"
        },
        {
          VIN:"2HKYF18614H584014",
          make:"Chrysler",
          model:"Pacifica",
          mileage:310,
          transmission:"semi-automatic",
          status:"Clean"
        },
        {
          VIN:"1GNDX13E73D169432",
          make:"Honda",
          model:"Pilot",
          mileage:394,
          transmission:"dual clutch",
          status:"Clean"
        },
        {
          VIN:"2G1FK3DJ3C9196639",
          make:"Jeep",
          model:"Wranlger",
          mileage:323,
          transmission:"semi-automatic",
          status:"salveage"
        },
        {
          VIN:"WAUBGAFL5BA050933",
          make:"Honda",
          model:"Civic",
          mileage:311,
          transmission:"Automatic",
          status:"Clean"
        },
        {
          VIN:"KMHDH4AE7DU817312",
          make:"Ford",
          model:"F-150",
          mileage:376,
          transmission:"semi-automatic",
          status:"Clean"
        },
        {
          VIN:"5XYZK4AG1BG049127",
          make:"Toyota",
          model:"Camry",
          mileage:242,
          transmission:"Automatic",
          status:"salvage"
        },
        
      ]);
    });
};
