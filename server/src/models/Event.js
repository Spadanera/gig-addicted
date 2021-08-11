import mongoose from 'mongoose';
import Song from './Song';
import Image from './Image';

const SetListType = Object.freeze({
    Unplugged: 'unplugged',
    Hybrid: 'hybrid',
    Electric: 'electric'
});

let EventSchema = new mongoose.Schema({
    eventId: mongoose.Schema.Types.ObjectId,
    bandId: mongoose.Schema.Types.ObjectId,
    eventDate: String,
    place: String,
    description: String,
    setList: [Song],
    isPublic: Boolean,
    isSetListPublic: Boolean,
    poster: Image
});

export default mongoose.model("Event", EventSchema);