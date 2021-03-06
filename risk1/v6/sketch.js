Ntrials = 0;
Nwin = 0.0;

function draw() { 
  clearscreen(240,240,240); // light gray
  display();
  frameRate(60);
    
  diceval1 = random([1,2,3,4,5,6]);
    drawText('Dice1 value = ' + diceval1,0.05*width,0.1*height);

      diceval2 = random([1,2,3,4,5,6]); 
  drawText('Dice2 value = ' + diceval2,0.55*width,0.1*height);

  diceval3 = random([1,2,3,4,5,6]); 
  drawText('Dice3 value = ' + diceval2,0.2*width,0.2*height);
    
  Ntrials += 1.0; 
  
  if (max(diceval1,diceval2) > diceval3) { // Note: 1 > 0 is always true
     Nwin += 1.0;
  }
  winfrac = Nwin/Ntrials;
  
  graph1.addPoint(100*winfrac);
  graph1.display();
  drawText('Ntrials = ' + Ntrials,0.25*width,0.8*height);
  
  graph2.addPoint(50);
  graph2.display();
  
}
