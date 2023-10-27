/**
 * an implementation of array storage
 */
public class ArrayClass{

    /**the backend array that stores data*/
    private int storage[];

    /**keep track of array index*/
    private int index = 0;

    /**keep track of array size*/
    private int size = 0;

    public ArrayClass(int size){
        /**set array size */
        this.size = size;
        storage = new int[size];
    }

    /** add new item to array
     * @param item
     */
    void add(int item){
        if(index < size){
            storage[index] = item;
            index += 1;
        }
    }

    /** view last item in array
     * @return last item
     */
    int view(){
        return storage[storage.length - 1];
    }

    /**check for the single occurence of an item
     * @return boolean
     */
    Boolean isItemPresent(int item){
        Boolean found = false;

        for(int value : storage){
            if(value == item){
                found = true;
            }
        }

        return found;

    }

    /**print out all the items in the array */
    void print(){
        for(int value : storage){
            System.out.print(value+" ");
        }
    }


}