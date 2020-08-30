import java.util.Arrays;

public class TestDP {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[] arr = new int[] {3, 34, 4, 12, 5, 2};
		
		int sum = 13;
		
		TestDP obj = new TestDP();
		obj.subsetSum(arr, sum);

	}

	public void subsetSum(int[] arr, int sum) {

		System.out.println(Arrays.toString(arr));
		int len = arr.length;
		boolean[][] table = new boolean[len + 1][sum + 1];


		for (int i = 0; i <= arr.length; i++) {
			table[i][0] = true;
		}
		
		
		for (int j = 1; j <= sum; j++) {
			table[0][j] = false;
		}
		
		for (int i = 1; i <= arr.length; i++) {
			for (int j = 1; j <= sum; j++) {
				
				 if (j >= arr[i-1]) {
				        table[i][j] = table[i-1][j - arr[i-1]] || table[i-1][j] ;
			      } else if (j < arr[i-1]) {
			        table[i][j] = table[i-1][j];
			      }
			}
		}
		
		
		System.out.println("Sum Exists --> "+table[arr.length][sum]);

	}

}
