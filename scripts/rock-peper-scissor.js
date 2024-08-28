 
     let score ={
                      win:0,
                     lose:0,
                      tie:0
 };
 let result =' ';
 document.querySelector('.result-para').innerHTML=`You picked ${usermove} and computer picked ${computerMove}. ${result}`;
   

 
 
 function computerlogic(){
            let RandomNumber = Math.random();
                    let computerMove=' ';
                   
 
                    

                        if(RandomNumber>=0 && RandomNumber<=1/3){
                            computerMove = 'Rock';
                        
                        }else if(RandomNumber>=1/3 && RandomNumber<=2/3){
                            computerMove ='peper';
                            
                        }else if(RandomNumber>=2/3 && RandomNumber<=1){
                            computerMove='scissor';
                        
                        }
                        return computerMove;
            }
                 
            function compireSystemAndUserMove(usermove){
                    computerMove=computerlogic();

                        if(usermove==='Rock'){
                    if(computerMove==='Rock'){
                    result='Tie';
                    }else if(computerMove==='peper'){
                    result='You lose!';
                    }else if(computerMove==='scissor'){
                    result='You win\nCongratulation';
                    }
                    
                
                }else if(usermove==='peper'){

    
                    if(computerMove==='Rock'){
                        
                result='You win\nCongratulation';
                    }else if(computerMove==='peper'){
                    result='Tie'
                    }else if(computerMove==='scissor'){
                    result='You lose!';
                    }
                }else if(usermove){

                if(computerMove==='Rock'){
                
                result='You lose!';
            }else if(computerMove==='peper'){

            result='You win\nCongratulation';
            }else if(computerMove==='scissor'){
            result='Tie';

            }



               
        }
         //displaying the score in paragraph
           
             if(result==='You win\nCongratulation'){
                score.win+=1;
         
            }else if(result==='You lose!'){

                score.lose+=1;
     
            }else if(result==='Tie'){
               score.tie+=1;
       
            }
            let score_result=document.querySelector('.past-result');
 score_result.innerHTML=`win:${score.win} Lose:${score.lose} Tie:${score.tie}`;     
  document.querySelector('.result-para').innerHTML=`
  You
  <img class="image-marg result-img" src="images/${usermove}-emoji.png" alt="">
  computer
 <img class="image-marg result-img" src="images/${computerMove}-emoji.png" alt=""></img>
  .${result}`;
  /*.innerHTML=`You 
  <img src="images/${usermove}-emoji.png" alt="">
  computer 
  <img src="images/${computerMove}-emoji.png" alt="">
  ${result}`;*/
       


        }
               
                