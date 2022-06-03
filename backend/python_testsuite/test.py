




def compare_files(f1, f2):
    """
    Compare two files line by line
    """
    with open(f1) as f1_file, open(f2) as f2_file:
        for line1, line2 in zip(f1_file, f2_file):
            if line1 != line2:
                return False
    return True






def test_1():


    
