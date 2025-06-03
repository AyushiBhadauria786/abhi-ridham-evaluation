// Write a JavaScript function to check whether a given value is IP value or not.

//Solution 1
function validIp(IpAdd){
    const parts = IpAdd.split(/[.:]/)

    if(parts.length === 4){

        for(const part of parts){
            const num = parseInt(part);
            if(isNaN(num) || num < 0 || num > 255){
                return false;
            }
        }
    return true
    }else if(parts.length === 8){
        for(const part of parts){
            if(!/^[0-9a-fA-F]{1,4}$/.test(part)){
                return false;
            }
        }
        return true;
    }
    return false;
}

const ipAddress = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
console.log(validIp(ipAddress));


//Solution 2

function checkIp(ip){
    const ipv4 = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

    return ipv4.test(ip) || ipv6.test(ip);
}

const example = "122.0.0.0";
console.log(checkIp(example));