$(function() {
    var canvas = document.getElementById("mainCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({canvas: canvas});
    var light = new THREE.DirectionalLight(0xffffff, 0.5);

    scene.add(light);
    scene.add(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({color: 0xffcc00})));

    camera.position.set(3, 3, 3);
    camera.up.set(0, 0, 1);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    light.position.set(2, 1, 3);
    renderer.setClearColor(0x000000, 0);

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();
})
