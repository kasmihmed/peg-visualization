def generate_visualization(furniture_path,peg_path):
    from PIL import Image
    import numpy as np
    from django.conf import settings
    import os

    max_width = 866
    max_height=420
    # main frame
    img = np.zeros([max_height,max_width,4],dtype=np.uint8)


    first_image = Image.open(settings.PROJECT_ROOT+ furniture_path[1:])
    #first_image_array = first_image.load()
    first_pix = np.array(first_image)
    # need to think about the postions as translations
    #first loop
    for i in range(first_image.height):
        for j in range(first_image.width):
            img[i][j] = first_pix[i][j]


    second_image = Image.open(settings.PROJECT_ROOT+peg_path[1:])
    #resize the pic
    second_image = second_image.resize([50,50],Image.ANTIALIAS)
    #first_image_array = first_image.load()
    second_pix = np.array(second_image)


    def locate_in_main_frame(main_frame_array,image_array,location):
        # need to think about the postions as translations
        for i in range(second_image.height):
            for j in range(second_image.width):
                # check if the pixel is already filled
                if (main_frame_array[i+location[0]][j+location[1]] == [255, 255, 255,   0]).all():
                    main_frame_array[i+location[0]][j+location[1]] = image_array[i][j]
        return main_frame_array

    # second loop
    # since we are going from cloose to far , we are drawing less



    img = locate_in_main_frame(first_pix,second_pix,(330,158))
    img = locate_in_main_frame(first_pix,second_pix,(330,658))
    image = Image.fromarray(img, 'RGBA')
    #image.save('my.png')
    return image
