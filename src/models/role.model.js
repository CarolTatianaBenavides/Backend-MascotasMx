import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const RoleModel = mongoose.model('Role', RoleSchema);

export default RoleModel;