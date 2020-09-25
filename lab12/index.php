<?php
    session_start();
    include("main.html");
  
   

    if(isset($_POST["submit"]) && !empty($_POST["submit"])){

        if(isset($_POST["name"])&& !empty($_POST["name"]) && isset($_POST["cod"])&& !empty($_POST["cod"])){

            $_POST["name"]=htmlspecialchars($_POST["name"]);
    
            $_POST["cod"]=htmlspecialchars($_POST["cod"]);
    
          
                echo "<br /><br /><div class=container>";
                echo "<div class=center-align>";
                $_SESSION['user']= $_POST["name"];
                $_SESSION['code']= $_POST["cod"];
                echo "<h4>Sesion de: ". $_SESSION['user']. "<br />";
                echo "Este es tu codigo ". $_SESSION['code']. "</h4>";     
                echo "<div/>";
                echo "<div/>";
                
                $target_dir = "uploads/";
                $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
                
                $uploadOk = 1;
                $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        
                $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
                if($check !== false) {
                    echo "File is an image - " . $check["mime"] . ". \n";
                    $uploadOk = 1;
                } else {
                    echo "File is not an image.";
                    $uploadOk = 0;
                }
                // Check if file already exists
                if (file_exists($target_file)) {

                    echo "Sorry, file already exists.";
                    $_SESSION["image"]=$target_file;
                    $uploadOk = 0;
                }
            
                    // Check file size
                if ($_FILES["fileToUpload"]["size"] > 500000) {
                    echo "Sorry, your file is too large.";
                    $uploadOk = 0;
                }
            
                    // Allow certain file formats
                if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                    && $imageFileType != "gif" ) {
                    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                    $uploadOk = 0;
                }
            
                    // Check if $uploadOk is set to 0 by an error
                if ($uploadOk == 0) {
                    echo "Sorry, your file was not uploaded.";
                    // if everything is ok, try to upload file
                } else {

                if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                    echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.\n";
                    $_SESSION["image"]=$target_file;
                } else {
                    echo "Sorry, there was an error uploading your file.";
                }

                }
                exit();
    
    
        }else{
            echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
        }    
        
    }
        
        // Check if image file is a actual image or fake image

?>