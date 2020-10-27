import simple_pb2

simple_message = simple_pb2.SimpleMessage()
simple_message.id = 123
simple_message.is_simple = False
simple_message.name = "123"
sample_list = simple_message.sample_list
sample_list.append(1)
sample_list.append(2)
sample_list.append(3)

print(simple_message)

with open("simple.bin", "wb") as f:
    print("write as binary")
    bytesAsString = simple_message.SerializeToString()
    f.write(bytesAsString)

with open("simple.bin", "rb") as f:
    print("read values")
    m = simple_pb2.SimpleMessage().FromString(f.read())

print(m)
