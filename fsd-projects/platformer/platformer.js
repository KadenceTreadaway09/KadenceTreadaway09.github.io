$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 290);
createPlatform(1350, 400, 50, 50,"hotpink");
createBadPlatform(500, 400, 100, 20, "blue");
createPlatform(34, 20, 120, 20, "purple", 1200, 400, 6, 245, 765, 3);

    // TODO 3 - Create Collectables
createCollectable("grace", 784, 50, 34);
createCollectable("diamond", 980, 170, 0.5, 0.7);
createCollectable("kennedi", 600, 430, 0.10, 1);
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 500);
createCannon("right", 300, 2000);
createCannon("left", 200, 2000, 20, 10, 100, 400, 2)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
