import {Schema, model, models} from 'mongoose';

// Define the properties for the model in mongodb
const projectSchema = new Schema(
  {
    name: {
      type: 'string',
      require: [true,'Title is required'],
      unique: true,
      trim: true,
      maxlength: [40, 'Title should be at most 40 characters']
    },
    description: {
      type: 'string',
      trim: true,
      maxlength: [200, 'Description should be at most 40 characters']
    },
    mainImage: {
      type: String,
      default: '',
    },
    images: [{
      type: String,
    }],
    tags: [
      {type: String,}
    ],
    i18n: { 
      es: {}, 
      en: {} 
    },
    link: {
      type: 'string',
      default: ''
    },
    code: {
      type: 'string',
      default: ''
    }
  }, 
  { 
    timestamps: true,
    versionKey: false,
  }
)

// When the model exist we dont need to created again
export default models.Project || model('Project', projectSchema);