import { Controller } from "react-hook-form"
import { useEffect, useState } from "react"

import { uploadToS3 } from "@/utils/UploadToS3"
import { useMediaData } from "@/hook/useMediaData"
import { Icons } from "./Icons"

interface Props {
  name: string
  control: any
  error?: string
  placeHolder?: string
  defaultImage?: string
}

export default function ImageField({
  name,
  control,
  error,
  defaultImage,
  placeHolder
}: Props) {
  const [preview, setPreview] = useState<string | null>(
    defaultImage ? defaultImage : null
  )

  const { getUploadUrl, loading } = useMediaData('images')

  useEffect(() => {
    if (defaultImage) {
      setPreview(defaultImage)
    }
  }, [defaultImage])

  return (<>
    <div className="w-full h-50">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              type="file"
              accept="image/*"
              disabled={loading}
              hidden
              className="border h-8 px-2 w-full rounded shadow-xl"
              onChange={async (e) => {
                const file = e.target.files?.[0]
                if (!file) return

                try {
                  const media = await getUploadUrl()
                  const key = await uploadToS3(media, file)
                  field.onChange(key)
                  setPreview(URL.createObjectURL(file))
                } catch {
                  field.onChange(null)
                  setPreview(null)
                }
              }}
            />

            {!preview && (
              <span className="w-full h-50 flex justify-center items-center flex-col text-gray-500 text-sm">
                <Icons.imageIcon />
                {placeHolder}
              </span>
            )}

            {preview && (<>
              <div className="w-fit">
                <img
                  src={preview}
                  alt="preview"
                  className="w-auto rounded border shadow"
                />
              </div>

              <div className="absolute p-2 bg-white rounded-full mx-5 top-2 right-0 cursor-pointer hover:bg-violet-100"
                onClick={() => (
                  setPreview(null),
                  field.onChange(null))}>
                <Icons.closeButtonIcon />
              </div>

            </>)}
          </>
        )}
      />

      {loading && (
        <p className="text-sm text-blue-500 mt-1">
          Uploading image...
        </p>
      )}
    </div>
    {error && (
      <p className="text-red-500 text-sm mb-5">{error}</p>
    )}
  </>)
}