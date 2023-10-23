#include<iostream>
#include<string>
#include<cctype>

using namespace std;

string soundex(string word){
    string code(word.size(),0);
    int count =1;
    code[0]=toupper(word[0]);
    
    for (int i=1 ;i<word.size() && count<=3; i++){
        word[i]=toupper(word[i]);
        cout<<count<<" "<<code<<endl;
        switch (word[i])
        {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'H':
            case 'W':
            case 'Y':
                break;

            case 'B':
            case 'F':
            case 'P':
            case 'V':
                code[count]='1';
                count+=1;
                break;

            case 'C':
            case 'G':
            case 'J':
            case 'K':
            case 'Q':
            case 'S':
            case 'X':
            case 'Z':
                code[count]='2';
                count+=1;
                break;

            case 'D':
            case 'T':
                code[count]='3';
                count+=1;
                break;

            case 'L':
                code[count]='4';
                count+=1;
                break;

            case 'M':
            case 'N':
                code[count]='5';
                count+=1;
                break;

            case 'R':
                code[count]='6';
                count+=1;
                break;

            default:
                cout<<"irregularities detected "<<endl;
                break;
        }
        
    }   
    cout<<"code: "<<code<<endl;
    return code; 
}

int main(){
    //implementing the soundex algorithm which takes two words converts them into the soundex code and check wheather they are same or not 
    string word1;
    string word2;
    cout<<"enter the word1: ";
    cin>>word1;
    cout<<"enter the word2: ";
    cin>>word2;
    
    //displaying what was entered 
    cout<<"you have entered , word1: "<<word1<<" word2: "<<word2<<endl;

    string code1 = soundex(word1);
    string code2 = soundex(word2);
    
    //displaying what was received as code  
    cout<<"we have got code as, word1: "<<code1<<" word2: "<<code2<<endl;
    
    int flag=0;

    for(int i=0 ; i<4 ; i++){
        if(code1[i]==code2[i]){
            flag=1;
        }
        else {
            flag=0;
            break;
        }
    }
    if(flag==0){
        cout<<"the words are not phonetecially same "<<endl;
        return 0;
    }
    cout<<"both the words have similar phonetics so they are same "<<endl;
    
return 0;
}