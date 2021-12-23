var documenterSearchIndex = {"docs":
[{"location":"api/#API/Reference","page":"API/Reference","title":"API/Reference","text":"","category":"section"},{"location":"api/","page":"API/Reference","title":"API/Reference","text":"","category":"page"},{"location":"api/","page":"API/Reference","title":"API/Reference","text":"Modules = [SubpixelRegistration]","category":"page"},{"location":"api/#SubpixelRegistration.calculate_stats-Tuple{Any, Any, Any}","page":"API/Reference","title":"SubpixelRegistration.calculate_stats","text":"SubpixelRegistration.calculate_stats(crosscor_maxima, source_freq, target_freq)\n\nCalculate the normalized root-mean-square error (NRMSE) and total phase difference between the two complex arrays, source_freq and target_freq, with maximum cross-correlation value crosscor_maxima\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.fourier_shift!-Tuple{AbstractMatrix{<:Complex}, Any}","page":"API/Reference","title":"SubpixelRegistration.fourier_shift!","text":"fourier_shift!(image_freq::AbstractMatrix{<:Complex}, shift)\n\nShift the given image, which is already in frequency-space, by shift along each axis. Modifies image_freq inplace.\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.fourier_shift-Tuple{Any, Any}","page":"API/Reference","title":"SubpixelRegistration.fourier_shift","text":"fourier_shift(image, shift)\n\nShift the given image by shift along each axis, using the Fourier phase information.\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.phase_offset-Tuple{Any, Any}","page":"API/Reference","title":"SubpixelRegistration.phase_offset","text":"phase_offset(source, target; upsample_factor=1)\n\nReturn the shift between source and target by measuring the maximum in the cross-correlation between the images. This algorithm can achieve 1/upsample_factor precision by locally upsampling the cross-correlation via a matrix-multiplication DFT.\n\nExamples\n\nReferences\n\n\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.upsampled_dft-Union{Tuple{T}, Tuple{AbstractMatrix{T}, Any, Any, Any}} where T<:Complex","page":"API/Reference","title":"SubpixelRegistration.upsampled_dft","text":"SubpixelRegistration.upsampled_dft(data, region_size, upsample_factor, offsets)\n\nCalculate the cross-correlation in a region of size region_size via an upsampled DFT. The DFT uses matrix-multiplication to super-sample the input by upsample_factor. The frequencies will be shifted and centered around offsets.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = SubpixelRegistration","category":"page"},{"location":"#SubpixelRegistration.jl","page":"Home","title":"SubpixelRegistration.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Code) (Image: Build Status) (Image: PkgEval) (Image: Coverage) (Image: License)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Image registration with sub-pixel precision using an upsampled discrete Fourier transform cross-correlation.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia>] add SubpixelRegistration","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"#License","page":"Home","title":"License","text":"","category":"section"},{"location":"#Contributing-and-Support","page":"Home","title":"Contributing and Support","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you would like to contribute, feel free to open a pull request. If you want to discuss something before contributing, head over to discussions and join or open a new topic. If you're having problems with something, please open an issue.","category":"page"}]
}