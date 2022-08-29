// Q1) Calculate the Sum and average Of the user entered values
//Ask the user to enter how many number he wants to get the sum of Save the number in array
//Show him the sum and average of the entered values.

function submit() {

    var sum = 0;
    var num = document.getElementById('targ').value;
    var items = [];
    parseInt(num);
    console.log(num);
    for (var i = 0; i <= num; i++) {
        items[i] = document.getElementById('box').value;
        items.push(parseInt(items[i]).value);
        sum = sum + parseInt(items[i]);
    }
    var avg = sum / num;

    document.write("The sum of all the elements is: " + sum + " The average is: " + avg);
}



