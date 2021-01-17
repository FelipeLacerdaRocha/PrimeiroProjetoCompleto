import { photoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({

    imports: [
        PhotoModule,
        PhotoFormModule,
        photoListModule
    ]
})
export class PhotosModule {}
