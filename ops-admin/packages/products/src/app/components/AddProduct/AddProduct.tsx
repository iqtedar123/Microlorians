import { css } from "@emotion/react";
import { ProductI } from "@shared/types/types";
import { useState } from "react";
import { createDocument, getImageUrl, handleUpload } from '@shared/firebase/firebase';
import Button from "@shared/Button/Button";
import { Breakpoints } from '@shared/utils/breakpoints';

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [Breakpoints.sm]: {
      paddingLeft: 8,
      paddingRight: 8
    },
    'form': {
      display: 'flex',
      flexDirection: 'column',
      width: 500,
      [Breakpoints.sm]: {
        width: '100%'
      },
      gap: 16,
      'label': {
        color: 'rgb(50, 186, 246)',
        fontSize: '1.5em',
      },
      'input': {
        height: 40,
        width: '100%'
      }
    }
  }),
  buttons: css({
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 16
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
      if (!uploadResult) {
        // Error uploading image
        console.log(uploadResult)
        alert('Error Uploading image. Try again')
        return;
      }
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
      <input type="text" name="title" value={inputs.title || ""} onChange={handleChange} required />
      <label htmlFor="title">Description</label>
      <textarea name="description" value={inputs.description || ""} onChange={handleChange} required />
      <label htmlFor="title">Price</label>
      <input type="number" name="price" value={inputs.price || ""} onChange={handleChange} />
      <label htmlFor="title">Category</label>
      <input type="category" name="category" value={inputs.category || ""} onChange={handleChange} />
      <label htmlFor="title">Image</label>
      <input type="file" name="image" accept="/image/*" onChange={saveImage} required />
    </form>
    <div css={styles.buttons}>
      <Button onClick={() => saveProduct()} label={'Save'} />
      <Button onClick={toggleView} label={'Cancel'} />
    </div>

  </div>
}

export default AddProduct;
