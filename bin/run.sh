rm -rf develop
mkdir develop
1spack load py-pytest
export HDF5_DIR=/home/hyoklee/spack.spack/opt/spack/linux-skylake/hdf5-develop-2.0-ndnqwwg5bfms4pl6ke2qsj54mvty77et
cmake \
    -DSITE:STRING="WSL/ubu-24" -DBUILDNAME="h5bench/2.0.0"  \
    ..
ctest -D Experimental 
cd ..
