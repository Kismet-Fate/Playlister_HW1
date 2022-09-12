import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Ailun Yu
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, song1, song2, index) {
        super();
        
        this.model = initModel;
        this.old = song1;
        this.new = song2;
        this.index = index;
    }

    doTransaction() {
        this.model.editSong(this.old, this.new, this.index);
    }
    
    undoTransaction() {
        this.model.editSong(this.new, this.old, this.index);
    }
}