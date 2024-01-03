import React, { useEffect, useState } from 'react';

import Avatar from '@/components/Avatar';
import { REGEX } from '@/common/constants';
import Upload from '@/components/Upload/Upload';
import Button, { EButtonStyleType } from '@/components/Button';

import { TUploadImageProps } from './UploadImage.types.d';
import './UploadImage.scss';

const UploadImage: React.FC<TUploadImageProps> = ({ size, value, disabled, onChange }) => {
  const [previewImage, setPreviewImage] = useState<string>();
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const handleUploadChange = (files: FileList | null): void => {
    if (files) {
      const file = Array.from(files)?.[0];
      setPreviewImage(URL.createObjectURL(file));
      setIsChanged(true);
      onChange?.(file);
    }
  };

  useEffect(() => {
    if (!isChanged) {
      if (REGEX.url.test(value || '')) {
        setPreviewImage(value);
      } else if ((value as any)?.lastModified) {
        setPreviewImage(URL.createObjectURL(value as any));
      } else {
        setIsChanged(false);
        setPreviewImage('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="UploadImage">
      <div className="UploadImage-avatar">
        <Avatar size={size} image={previewImage} />
      </div>
      <div className="UploadImage-btn">
        <Upload accept=".jpg, .png, .jpeg" disabled={disabled} onChange={handleUploadChange}>
          <Button title="Thay ảnh" styleType={EButtonStyleType.PRIMARY_TRANSPARENT} size="small" />
        </Upload>
      </div>
      <div className="UploadImage-description">Dụng lượng file tối đa 1 MB. Định dạng:.JPEG, .PNG</div>
    </div>
  );
};

export default UploadImage;
