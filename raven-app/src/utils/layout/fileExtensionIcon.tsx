import { SVGAttributes, Suspense, lazy } from 'react'

import { BiSolidFile } from 'react-icons/bi'

const Excel = lazy(() => import('@/assets/icons/excel.svg?react'))
const Word = lazy(() => import('@/assets/icons/word.svg?react'))
const Image = lazy(() => import('@/assets/icons/image.svg?react'))
const Pdf = lazy(() => import('@/assets/icons/pdf.svg?react'))
const FileIcon = lazy(() => import('@/assets/icons/file.svg?react'))


export const imageExt = ["jpeg", "jpg", "png"]

export const excelExt = ['csv', 'xls', 'xlsx']

export const wordExt = ['doc', 'docx']

interface FileExtensionIconProps extends SVGAttributes<HTMLOrSVGElement> {
    ext: string
}
export const FileExtensionIcon = ({ ext, ...props }: FileExtensionIconProps) => {

    const isExcel = excelExt.includes(ext)
    const isImage = imageExt.includes(ext)
    const isWord = wordExt.includes(ext)
    const isPdf = ext === "pdf"
    return <Suspense fallback={<BiSolidFile width='18px' fill='var(--gray-12)' {...props} />}>
        {isExcel && <Excel width='18px' fill='var(--gray-12)' {...props} />}
        {isImage && <Image width='18px' fill='var(--gray-12)' {...props} />}
        {isWord && <Word width='18px' fill='var(--gray-12)' {...props} />}
        {isPdf && <Pdf width='18px' fill='var(--gray-12)' {...props} />}
        {!isExcel && !isImage && !isWord && !isPdf && <FileIcon width='18px' fill='var(--gray-12)' {...props} />}
    </Suspense>

}