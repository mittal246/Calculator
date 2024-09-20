document.addEventListener('DOMContentLoaded',function()
{
    console.log('Calculator is ready to display');
    const display=document.getElementById('display-output');
    const buttons=document.getElementsByClassName('btn');
 

    let currentValue='';
    function result()
    {
      const convertValue=currentValue.replace('%','*0.01');
      const output=eval(convertValue);
      currentValue=output.toString();
      display.value=currentValue;
    }
    function divide(num1, num2) {
        if (num2 === 0) {
            // Handle division by zero error
            return "Error: Division by zero";
        } else {
            return num1 / num2;
        }
    }
    
 for(let i=0;i<buttons.length;i++)
    {
        const button=buttons[i];
        button.addEventListener('click',function() {
            const value =button.innerText;
            if(value=='AC')
                {
                  currentValue='';
                  display.value=currentValue;
                }
            else if(value=='=')
                {
                  result();
                  divide();
                }
            else
                {
                    currentValue+=value;
                    display.value=currentValue;
                }
            
        
     })
    }
});
