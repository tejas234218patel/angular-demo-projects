import { Injectable } from '@angular/core';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Snippet } from '../../models/snippet';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db?: any;
  constructor(private authService: AuthService, private route: Router) {
    this.db = getFirestore();
  }

  async CreateSnippet(snippet: Snippet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippet,
        by: this.authService.getUid(),
      });
      this.route.navigate(['/']);
    } catch (e) {
      console.log('Error adding document', e);
    }
  }

  async getAllSnippets() {
    let result: any[] = [];
    const querySnapshot = await getDocs(collection(this.db, 'snippets'));
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    return result;
  }

  async getSnippetById(
    docId: string
  ): Promise<Snippet | { id: string; title: string; code: string }> {
    let snippetResult: Snippet;
    const docRef = doc(this.db, 'snippets', docId);
    console.log('docRef: ', docRef);
    const docSnap = await getDoc(docRef);
    console.log('docSnap: ', docSnap);

    if (docSnap.exists()) {
      const data = docSnap.data();
      snippetResult = {
        id: docRef.id,
        title: data['title'] || 'not found',
        code: data['code'] || 'not found',
        // ... other properties from docSnap.data() if needed
      };
      return snippetResult;
    } else {
      return {
        id: '',
        title: 'not found',
        code: 'not found',
      };
    }
  }
}
