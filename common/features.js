const features={};

features.getPathCount = (paths) => {
    return paths.length;
}

features.getPointcount = (paths) => {
    const points = paths.flat();
    return points.length;
}




if (typeof module !== 'undefined') {
    module.exports=features;
  }