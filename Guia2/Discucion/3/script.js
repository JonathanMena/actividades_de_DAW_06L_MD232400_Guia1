document.addEventListener('DOMContentLoaded', function() {
    const bubbleSortForm = document.getElementById('bubbleSortForm');
    const originalList = document.getElementById('originalList');
    const sortedList = document.getElementById('sortedList');
    
    bubbleSortForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const numbersInput = document.getElementById('numbersInput').value;
        const sortDirection = document.getElementById('sortDirection').value;
        
        const numbersArray = numbersInput.split(',').map(Number);
        const sortedArray = bubbleSort(numbersArray.slice(), sortDirection);
        
        originalList.innerHTML = numbersArray.map(num => `<li>${num}</li>`).join('');
        sortedList.innerHTML = sortedArray.map(num => `<li>${num}</li>`).join('');
    });
});

function bubbleSort(arr, direction) {
    const length = arr.length;
    
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if ((direction === 'asc' && arr[j] > arr[j + 1]) ||
                (direction === 'desc' && arr[j] < arr[j + 1])) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}