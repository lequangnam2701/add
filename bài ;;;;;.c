#include <stdio.h>
int main() {
int arr [5];
int i,sum, max, min;
  float avg;
    for( i = 0 ; i < 5 ; i ++ ){
  	    printf("enter 5 number:=) ", i + 1 );
  	    scanf("%d", &arr[i]);
  	    sum += arr[i];
  }
    max = arr[0];
    min = arr[0];
    
    for (i = 0 ; i < 5 ;i ++ ){
    	
         if(arr[i] > max)
         max = arr[i];
         
    	 if(arr[i] < min)
    	 min = arr[i];
    	 
	}
	
	 avg=( float) sum/5;
	    printf("\nsum = %d", sum );
	    printf("\nmax = %d", max );
	    printf("\nmin = %d", min );
	    printf("\navg = %f", avg);  

    for(i = 4 ; i >= 0 ; i -- ){
    	printf("\n enter 5 number: %d ", arr[i]);
    }
}
