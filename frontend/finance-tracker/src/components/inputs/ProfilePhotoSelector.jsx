import React, { useState, useRef } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu'

const ProfilePhotoSelector = ({ image, setImage }) => {
    const inputRef = useRef(null)

    const [preview, setPreview] = useState(null)
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
                setImage(file)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = () => {
        setPreview(null)
        setImage(null)
    }

    const onChooseFile = () => {
        inputRef.current.click()
    }

    return (
        <div className="flex justify-center mb-6">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={inputRef}
                className="hidden"
            />

            {!image ? (
                <div className="relative flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                        <LuUser className="text-gray-500 w-10 h-10" />
                    </div>
                    <button
                        type="button"
                        className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition duration-200 flex items-center gap-2 text-sm py-2 px-4"
                        onClick={onChooseFile}
                    >
                        <LuUpload className="text-white" /> Upload Photo
                    </button>
                </div>
            ) : (
                <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-2">
                        <img
                            src={preview}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-200 flex items-center gap-2 text-sm py-2 px-4"
                            onClick={handleRemoveImage}
                        >
                            <LuTrash className="text-white" /> Remove
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfilePhotoSelector