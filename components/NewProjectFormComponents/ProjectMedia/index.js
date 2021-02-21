//Package imports
import { useContext, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'

//Context imports
import NewProjectFormContext from '../../../context/NewProjectFormContext'

//Style imports
import {
    Container,
    Title,
    Description,
    ImageInputWrapper
} from './styles'

export default function ProjectMedia(props) {
    const { formData, updateFormPreviewData } = useContext(NewProjectFormContext)
    const [imagesField, imagesMeta] = useField('images')

    const { error, helperText, form, setFieldValue, ...rest } = props

    const handleSelectImages = (event) => {
        if (!event.target.files) {
            return
        }

        const selectedImages = Array.from(event.target.files)

        setFieldValue(imagesField.name, selectedImages)

        const selectedImagesPreview = selectedImages.map(image => {
            return URL.createObjectURL(image)
        })

        updateFormPreviewData('previewImages', selectedImagesPreview)
    }

    return (
        <Container>
            <Title>Project Media</Title>
            <Description>Add some media to represent your project, you can either screenshot some screens or make your own media</Description>
            <ImageInputWrapper>
                <div className="images-container">
                    {formData.previewImages.map(image => {
                        return (
                            <div>
                                <img key={image} src={image} alt={name} />
                                <button>delete</button>
                            </div>
                        )
                    })}
                    <label htmlFor="image[]" className="new-image-label">
                        {(formData.previewImages.length > 1) ? 're-upload images' : 'upload images'}
                    </label>
                </div>

                <input
                    accept="image/*"
                    className='file-input'
                    id="image[]"
                    multiple
                    onChange={handleSelectImages}
                    type="file"
                />
            </ImageInputWrapper>
        </Container>
    )
}