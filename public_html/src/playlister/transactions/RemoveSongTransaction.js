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
    constructor(initModel, song) {
        super();
        this.model = initModel;
        this.song = song;
    }

    doTransaction() {
        this.model.removeSong(song);
    }
    
    undoTransaction() {
        this.model.addSong(song);
    }
}