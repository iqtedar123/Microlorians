import { css } from "@emotion/react";
import { ProductI } from "@shared/types/types";
import { useState } from "react";
import { createDocument, getImageUrl, handleUpload } from '@shared/firebase/firebase';

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    'form': {
      display: 'flex',
      flexDirection: 'column',
      'label': {
        color: 'red'
      },
      'input': {
        height: 40,
      }
    }
  }),
  buttons: css({
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxWidth: 100,
  })
}
const AddProduct = ({ toggleView }: { toggleView: () => void; }) => {
  const [inputs, setInputs] = useState<ProductI>({});
  const [file, setFile] = useState<File | null>(null)
  const handleChange = (event: { target: { name: string; value?: string | number; }; }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const saveImage = (event: { target: { files: FileList | null; }; }) => {
    setFile(event.target.files ? event.target.files[0] : null);
  }

  const saveProduct = async () => {
    if (!inputs.title || !inputs.description || !file) {
      alert('Missing title or description or image')
    } else {
      const uploadResult = await handleUpload(file);
      const url = await getImageUrl(uploadResult.ref)
      console.log(url)
      const data = {
        ...inputs,
        image: url,
      };
      const result = await createDocument('products', data)
      if (result) {
        toggleView();
      } else {
        alert('Error creating product')
      }
    }

  }
  return <div css={styles.wrapper}>
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={inputs.title || ""} onChange={handleChange} />
      <label htmlFor="title">Description</label>
      <textarea name="description" value={inputs.description || ""} onChange={handleChange} />
      <label htmlFor="title">Price</label>
      <input type="number" name="price" value={inputs.price || ""} onChange={handleChange} />
      <label htmlFor="title">Category</label>
      <input type="category" name="category" value={inputs.category || ""} onChange={handleChange} />
      <label htmlFor="title">Image</label>
      <input type="file" name="image" accept="/image/*" onChange={saveImage} />
    </form>
    <div css={styles.buttons}>
      <button onClick={() => saveProduct()}>Save</button>
      <button onClick={toggleView}>Cancel</button>
    </div>

  </div>
}

export default AddProduct;
