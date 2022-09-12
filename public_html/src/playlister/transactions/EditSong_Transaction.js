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
    constructor(initModel, song1, song2) {
        super();
        this.model = initModel;
        this.song1 = song1;
        this.song2 = song2;
    }

    doTransaction() {
        this.model.editSong(this.song1, this.song2);
    }
    
    undoTransaction() {
        this.model.editSong(this.song2, this.song1);
    }
}