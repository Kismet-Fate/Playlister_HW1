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
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, song, index) {
        super();
        this.model = initModel;
        let s = song;
        this.song = s;
        this.index = index;
    }

    doTransaction() {
        this.model.removeSong(this.song, this.index);
    }
    
    undoTransaction() {
        this.model.addSong(this.song, this.index);
    }
}