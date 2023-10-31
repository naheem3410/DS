public class Main {
    public static void main(String[] arg){
        System.out.println("Test Run");
        ArrayClass one = new ArrayClass(5);
        for(int i =0+1; i<8; i++){
            one.add(i);
        }
        one.print();
        Boolean isPresent = one.isItemPresent(3);
        System.out.println(isPresent);
        System.out.println("view "+one.view());
        System.out.println("index "+one.searchItemIndex(4));
        one.deleteItem(3);
        one.print();

    }
}
