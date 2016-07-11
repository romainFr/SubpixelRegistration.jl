# subpixelRegistration

[![Build Status](https://travis-ci.org/romainFr/subpixelRegistration.jl.svg?branch=master)](https://travis-ci.org/romainFr/subpixelRegistration.jl)


 Algorithm modified from the [Matlab code](http://www.mathworks.com/matlabcentral/fileexchange/18401-efficient-subpixel-image-registration-by-cross-correlation) accompanying 
 [Manuel Guizar-Sicairos, Samuel T. Thurman, and James R. Fienup, "Efficient subpixel image registration algorithms," Opt. Lett. 33, 156-158 (2008)](http://www.opticsinfobase.org/ol/fulltext.cfm?uri=ol-33-2-156&id=148843) . My implementation allows to register arrays of arbitrary dimensions (not just 2d). Functions are written for `AbstractArray`s and should work for `Image`s.

## Example 
```julia
julia> using subpixelRegistration

## Building a simple 4d array
julia> test4d = zeros(40,40,20,2)

julia> test4d[10:20,10:20,2:10,1] = 1
julia> test4d[5:15,15:25,5:13,2] = 1

## By using larger ufac one gets to higher subpixel resolution
julia> dftResults = stackDftReg(test4d,ufac=1)
2-element Array{Any,1}:
 Dict{ASCIIString,Any}("error"=>4.440892098500626e-16,"shift"=>[0.0,0.0,0.0])
 Dict{ASCIIString,Any}("error"=>0.0,"shift"=>[5.0,-5.0,-3.0])

## The array can theb be realigned from this dictionary
julia> back4d = alignFromDict(test4d,dftResults)


```
