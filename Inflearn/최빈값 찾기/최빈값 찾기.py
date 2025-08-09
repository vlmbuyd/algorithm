def find_max_idx(array):
    maxIdx = 0
    for i in range (len(array)):
        if (array[i] > array[maxIdx]):
            maxIdx = i
    return maxIdx


def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26

    for str in string:
        if str.isalpha():
            asciIdx = ord(str) - ord('a')
            alphabet_occurrence_array[asciIdx] += 1

    maxIdx = find_max_idx(alphabet_occurrence_array)

    return chr(maxIdx + ord('a'))


result = find_max_occurred_alphabet
print("정답 = i 현재 풀이 값 =", result("hello my name is dingcodingco"))
print("정답 = e 현재 풀이 값 =", result("we love algorithm"))
print("정답 = b 현재 풀이 값 =", result("best of best youtube"))
