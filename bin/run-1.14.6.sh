rm -rf 1.14.6
mkdir 1.14.6
cd 1.14.6
spack load py-pytest
export HDF5_DIR=/home/hyoklee/spack.spack/opt/spack/linux-skylake/hdf5-1.14.6-wdnzjkbzw7kmv2fapokah6otyfdqpj6f/
cmake \
    -DSITE:STRING="WSL/ubu-24" -DBUILDNAME="h5bench/1.14.6"  \
    ..
ctest -D Experimental 
cd ..
