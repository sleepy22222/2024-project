import os

def show_image(file_path):
    try:
        os.startfile(file_path)  # 시스템 기본 프로그램으로 파일 열기
    except AttributeError:
        try:
            subprocess.call(['open', file_path])  # macOS에서는 open 명령어 사용
        except Exception as e:
            print("이미지를 열 수 없습니다:", e)

if __name__ == "__main__":
    image_file = "개민준.jfif"  # 여기에 이미지 파일의 경로를 넣어주세요.
    show_image(image_file)
