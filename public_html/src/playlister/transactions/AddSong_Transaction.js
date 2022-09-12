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
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel,index) {
        super();
        this.model = initModel;
        this.index = index;
        let n = ({
            "title": "Untitled",
            "artist": "Unknown",
            "youTubeId": "dQw4w9WgXcQ"
        });
    }

    doTransaction() {
        this.model.addNewSong();
    }
    
    undoTransaction() {
        this.model.removeSong(this.n, this.index);
    }
}