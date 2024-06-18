const Document = require('../models/documentModel');
const User = require('../models/userModel');

// Create a new document
exports.createDocument = async (req, res) => {
  try {
    const { name, description,creation_date, author_id,size, file   } = req.body;
    const document = new Document({
      name,
      description,
      creation_date,
      author_id,
      size,
      file: {
        data: Buffer.from(file, 'base64'), 
        contentType: req.headers['content-type'] 
      }
    });
    await document.save();
    res.status(201).send(document);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all documents
exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).send(documents);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get a document by ID
exports.getDocumentById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).send();
    }
    const base64File = document.file.data.toString('base64'); // Convert the Buffer to Base64
    res.status(200).send({ ...document.toJSON(), file: base64File }); // Send the document with the file converted to Base64
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update a document
exports.updateDocument = async (req, res) => {
  try {
    const { title, description, file } = req.body;
    const document = await Document.findByIdAndUpdate(req.params.id, {
      title,
      description,
      file: {
        data: Buffer.from(file, 'base64'), // Convert the Base64 file to Buffer
        contentType: req.headers['content-type'] // Get the content type from the request header
      },
      modification_date: Date.now()
    }, { new: true, runValidators: true });
    if (!document) {
      return res.status(404).send();
    }
    res.status(200).send(document);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a document
exports.deleteDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) {
      return res.status(404).send();
    }
    res.status(200).send(document);
  } catch (error) {
    res.status(400).send(error);
  }
};


// Create a new document
exports.createDocumentByUser = async (req, res) => {
  try {
    const { name, description,size, file} = req.body;
    const author_id = req.params.id;
    const user = await User.findById(author_id);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    const document = new Document({
      name,
      description,
      author_id,
      size,
      file: {
        data: Buffer.from(file, 'base64'), 
        contentType: req.headers['content-type'] 
      }
    });
    await document.save();
    res.status(201).send(document);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all documents belonging to the user
exports.getDocumentsByUser = async (req, res) => {
    
  try {
    const author_id = req.params.id;
    const user = await User.findById(author_id);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    const documents = await Document.find({ author_id });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
