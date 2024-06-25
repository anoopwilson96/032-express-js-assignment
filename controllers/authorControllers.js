const Author = require("../model/authorModel");

//code to get all authors

const getAuthors = async (req, res) => {
  try {
    const authors =  await Author.find({});
    res.status(200).json(authors)

  } catch (error) {
    res.status(404).send('Error in fetching')
  }
}

// to get author by specific ID

const getAuthorById = async (req, res) => {
  try {
  const author =  await Author.findById(req.params.authorId).exec();
  res.status(200).json(author)
    
  } catch (error) {
    res.status(404).send('Error: Not found')
  }
}

// to add new author

const addAuthor = async (req, res) => {
  try {
  const authorData = req.body
  const author = await new Author (authorData);
                 await author.save()
  res.status(200).send( "Added" + author)
  } catch (error) {
  res.status(200).send('Error: Failed to add')
  }
}

// update an author

const patchAuthor = async (req, res) => {
 try {
   const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorId,req.body, {new:true})

   res.status(200).json(updatedAuthor)

  } catch (error) {
  res.status(404).send('Error: Failed to update')
 }
}



//delete an author

const deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.authorId)
    res.status(200).send('Deleted the author')
  } catch (error) {
    res.status(404).send('Error: Failed to delete')
  }
 
}

module.exports = {
  getAuthors,
  getAuthorById,
  addAuthor,
  patchAuthor,
  deleteAuthor
}